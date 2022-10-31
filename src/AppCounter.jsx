import { useState } from 'react';
import './App.css'
import Counter from './components/Counter'

export default function AppCounter() {

    const handleClick = () => setCount(prev => prev + 1);

    const [count, setCount] = useState(0);

    return (
        <div className='container'>
            <div className='banner'>
                Total count: {count} {count > 10 ? '❤️‍🔥' : '❄️'}
            </div>

            <div className='counters'>
                <Counter total={count} onClick={handleClick} />
                <Counter total={count} onClick={handleClick}/>
            </div>

        </div>
    );
}
