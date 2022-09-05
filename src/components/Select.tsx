import { useState } from 'react'
import { styled } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import InputBase from '@mui/material/InputBase'

const BootstrapInput = styled(InputBase)(({ theme }) => ({
	'label + &': {
		marginTop: theme.spacing(1)
	},
	'& .MuiInputBase-input': {
		borderRadius: 4,
		position: 'relative',
		backgroundColor: theme.palette.background.paper,
		border: '1px solid #ced4da',
		fontSize: 16,
		padding: '10px 26px 10px 12px',
		transition: theme.transitions.create(['border-color', 'box-shadow']),
		'&:focus': {
			borderRadius: 4,
			borderColor: '#80bdff',
			boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
		}
	}
}))

interface ISelect {
	beat: string
	setBeat: (beat: string) => void
}

const SelectBeat: React.FC<ISelect> = ({ beat, setBeat }) => {
	const handleChange = (event: SelectChangeEvent) => {
		setBeat(event.target.value)
	}

	return (
		<FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
			<InputLabel id='beatsSelect'>Select Beats</InputLabel>
			<Select
				labelId='beatsSelect'
				id='beatsSelect'
				value={beat}
				label='Select Beats'
				onChange={handleChange}
				input={<BootstrapInput />}
			>
				<MenuItem value='Lo-Fi'>Lo-Fi</MenuItem>
				<MenuItem value='Mindfulness'>Mindfulness</MenuItem>
				<MenuItem value='Dreamy'>Dreamy</MenuItem>
				<MenuItem value='Dark'>Dark</MenuItem>
				<MenuItem value='Light'>Light</MenuItem>
				<MenuItem value='Hopeful'>Hopeful</MenuItem>
				<MenuItem value='Connected'>Connected</MenuItem>
				<MenuItem value='Spiritual'>Spiritual</MenuItem>
			</Select>
		</FormControl>
	)
}

export default SelectBeat
