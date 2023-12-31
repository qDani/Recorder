import { GitHub, Telegram } from '@/assets/icons/Social'
import style from '@/styles/modal.module.scss'

const InfoFooter = () => {
	return (
		<div className={style.modalFooter}>
			<a href="https://github.com/PAXANDDOS" target="_blank" rel="noreferrer">
				<GitHub />
			</a>
			<a href="https://t.me/PAXANDDOS" target="_blank" rel="noreferrer">
				<Telegram />
			</a>
			<span>
				Copyright © 2022{' '}
				<a href="https://dlupu.com/" target="_blank" rel="noreferrer">
					Dani
				</a>
				. All rights reserved.
			</span>
		</div>
	)
}

export default InfoFooter
