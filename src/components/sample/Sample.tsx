import './sample.scss'
import flavor from '../../assets/flavors/flamin-hot.png'
export default function Sample() {
    return (
        <section role='sample food' className='sample-container'>
            <img src={flavor} alt='Flamin hot' />
        </section>
    )
}