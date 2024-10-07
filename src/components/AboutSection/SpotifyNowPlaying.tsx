import React, { useEffect, useState } from 'react';
import querystring from 'querystring';
import { Buffer } from 'buffer';
import { PauseCircle, AlertCircle, WifiOff, Clock } from 'lucide-react';

// Basic types for the component
type TrackData = {
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
  timePlayed: number;
  timeTotal: number;
  artistUrl: string;
  lastPlayedAt?: string;
}

// API Configuration
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const LAST_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played?limit=1';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

// Environment variables
const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN;
const UPDATE_INTERVAL = 60000*60; //every hour
const SAMPLE_ACCESS_TOKEN ="BQBOL1vMvhUtr3lXvpbCRPClbz6oAWDKLAkTVo5Z_YzG9uHZOTfZsV1-8-IyTwuUnORgWPielkWdT9hjq4eoy2z9B30WIZrWMwAKtfMHJbfH70V7EL9tUCty5OuN1LBbX54_kBHRvVeHV13NSb6_LM2eA5uc4BTE1Xly-ke0HUy4dmvjBUzJdtK3e2mHCLQEzwnIaon-bYULFQmuCydZ7VOqG4bVe1p4GSldGbszZLMGqcqE55FAr86XvrTZrL3rjPfBM52a6rqXJ1USbFF_EHNts9_zteo4MA46Jda6igUFJiD-RW3X79uE4OITRng3zOKw7lpgsUrWJqQoKA7fPPN9tqMq"
const getAccessToken = async () => {
  const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');

  try {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: querystring.stringify({
        grant_type: 'refresh_token',
        refresh_token: REFRESH_TOKEN,
      }),
    });

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
};

const getLastPlayed = async (accessToken: string) => {
  try {
    const response = await fetch(LAST_PLAYED_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();
    const lastTrack = data.items[0];

    if (!lastTrack) return null;

    return {
      albumImageUrl: lastTrack.track.album.images[0].url,
      artist: lastTrack.track.artists.map(artist => artist.name).join(', '),
      isPlaying: false,
      songUrl: lastTrack.track.external_urls.spotify,
      title: lastTrack.track.name,
      timePlayed: 0,
      timeTotal: lastTrack.track.duration_ms,
      artistUrl: lastTrack.track.album.artists[0].external_urls.spotify,
      lastPlayedAt: lastTrack.played_at,
    };
  } catch (error) {
    console.error('Error fetching last played track:', error);
    return null;
  }
};

const getNowPlaying = async () => {
  try {
    const accessToken = await getAccessToken();

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.status === 204) {
      // No track currently playing, get last played
      return getLastPlayed(accessToken);
    }

    if (!response.ok) {
      throw new Error('Unable to fetch current song');
    }

    const song = await response.json();
    
    return {
      albumImageUrl: song.item.album.images[0].url,
      artist: song.item.artists.map(artist => artist.name).join(', '),
      isPlaying: song.is_playing,
      songUrl: song.item.external_urls.spotify,
      title: song.item.name,
      timePlayed: song.progress_ms,
      timeTotal: song.item.duration_ms,
      artistUrl: song.item.album.artists[0].external_urls.spotify,
    };
  } catch (error) {
    console.error('Error fetching currently playing song:', error);
    return null;
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(
    Math.floor((date.getTime() - Date.now()) / (1000 * 60)), 
    'minute'
  );
};

const pad = (n: number) => (n < 10 ? `0${n}` : n.toString());

const SpotifyNowPlaying: React.FC = () => {
  const [trackData, setTrackData] = useState<TrackData>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getNowPlaying();
        setTrackData(data);
      } catch (error) {
        console.error('Error in fetch interval:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    intervalId = setInterval(fetchData, UPDATE_INTERVAL);

    return () => clearInterval(intervalId);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-16 bg-gray-100 rounded-lg">
        <AlertCircle className="w-6 h-6 text-gray-400" />
        <span className="ml-2 text-sm text-gray-500">Loading...</span>
      </div>
    );
  }

  if (!trackData) {
    return (
      <div className="flex items-center justify-center w-full h-16 bg-gray-100 rounded-lg">
        <WifiOff className="w-6 h-6 text-gray-400" />
        <span className="ml-2 text-sm text-gray-500">Unable to fetch track data</span>
      </div>
    );
  }

  const secondsPlayed = Math.floor(trackData.timePlayed / 1000);
  const minutesPlayed = Math.floor(secondsPlayed / 60);
  const secondsTotal = Math.floor(trackData.timeTotal / 1000);
  const minutesTotal = Math.floor(secondsTotal / 60);

  return (
    <a 
      href={trackData.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block hover:bg-gray-50 transition-colors duration-200"
    >
      <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
        <div className="flex-shrink-0 w-16 h-16 mr-4">
          <img 
            src={trackData.albumImageUrl} 
            alt="Album Cover"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        
        <div className="flex-grow min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-900 truncate">
              {trackData.title}
            </h3>
            {trackData.isPlaying ? (
              <div className="w-4 h-4">
                <span className="flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </div>
            ) : trackData.lastPlayedAt ? (
              <div className="flex items-center text-xs text-gray-400">
                <Clock className="w-3 h-3 mr-1" />
                {formatDate(trackData.lastPlayedAt)}
              </div>
            ) : (
              <PauseCircle className="w-4 h-4 text-gray-400" />
            )}
          </div>
          
          <p className="mt-1 text-sm text-gray-500 truncate">
            {trackData.artist}
          </p>
          
          <div className="mt-1 flex items-center text-xs text-gray-400">
            <span>
              {pad(minutesPlayed)}:{pad(secondsPlayed % 60)}
            </span>
            <div className="mx-2 flex-grow relative h-1 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="absolute h-full bg-green-500 rounded-full"
                style={{ width: `${(trackData.timePlayed / trackData.timeTotal) * 100}%` }}
              />
            </div>
            <span>
              {pad(minutesTotal)}:{pad(secondsTotal % 60)}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default SpotifyNowPlaying;