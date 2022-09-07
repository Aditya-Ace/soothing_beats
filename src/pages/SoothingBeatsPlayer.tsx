import { useState, useEffect, useRef } from 'react'
import Typography from '@mui/material/Typography'

import { fetchAdityaPrimaryPlaylistItems } from '../services'
import { PLAYLISTS } from '../constants'

interface ISoothingBeatsPlayer {
	beat: string
	handleLogoutFromSpotify: () => void
}
const SoothingBeatsPlayer: React.FC<ISoothingBeatsPlayer> = ({
	beat,
	handleLogoutFromSpotify
}) => {
	const audioRef = useRef() as React.MutableRefObject<HTMLAudioElement>
	const [playlistItems, setPlaylistItems] = useState<any[]>([])
	const [currentTrack, setCurrentTrack] = useState<{
		trackName: string
		trackImageUrl: string
	}>({ trackName: '', trackImageUrl: '' })
	const [trackURL, setTrackURL] = useState('')
	const { PrimaryPlaylist, PrimaryPlaylistId } = PLAYLISTS

	useEffect(() => {
		const token = localStorage.getItem('access_token')
		const fetchPlaylistItems = async () => {
			if (token) {
				const playlistItems = await fetchAdityaPrimaryPlaylistItems(
					token,
					PrimaryPlaylistId
				)
				setPlaylistItems(playlistItems)
			} else {
				handleLogoutFromSpotify()
				return
			}
		}
		fetchPlaylistItems()
	}, [])

	const handleTrackEndEvent = (event: any) => {
		const randomTrack =
			playlistItems[Math.floor(Math.random() * playlistItems.length)]
		setTrackURL(randomTrack.track.preview_url)
		setCurrentTrack({
			trackName: randomTrack.track.name,
			trackImageUrl: randomTrack.track.album.images[1].url
		})
		if (audioRef.current) {
			audioRef.current.load()
			audioRef.current.play()
		}
	}

	useEffect(() => {
		if (playlistItems.length) {
			const randomTrack =
				playlistItems[Math.floor(Math.random() * playlistItems.length)]
			setTrackURL(randomTrack.track.preview_url)
			setCurrentTrack({
				trackName: randomTrack.track.name,
				trackImageUrl: randomTrack.track.album.images[1].url
			})
			if (audioRef.current) {
				audioRef.current.load()
				audioRef.current.play()
			}
		}
	}, [beat, playlistItems.length])

	return (
		<section>
			{playlistItems.length && (
				<>
					<div style={{ textAlign: 'center' }}>
						<Typography variant='h5' component='h5' gutterBottom color='#fff'>
							We are playing Soothing Beats mixed with {beat}.
						</Typography>
						<Typography variant='h5' component='h5' gutterBottom color='#fff'>
							CurrentTrack is {currentTrack?.trackName}
						</Typography>
						<Typography variant='h6' component='h6' gutterBottom color='#fff'>
							Your listening {PrimaryPlaylist} playlist.
						</Typography>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							gap: '2rem'
						}}
					>
						<img src={currentTrack?.trackImageUrl} alt='Track Image' />
						<audio controls onEnded={handleTrackEndEvent} ref={audioRef}>
							<source src={trackURL} />
						</audio>
					</div>
				</>
			)}
		</section>
	)
}

export default SoothingBeatsPlayer
