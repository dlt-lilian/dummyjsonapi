export default function ProductPage({ products }) {
    return (
        <div className={'flex space-x-4'}>
            <div className={'flex w-2/3 bg-slate-950 rounded-md'}>
                <img src={'https://ghibli-shop.fr/wp-content/uploads/2021/10/anecdotes-kiki-jiji.jpeg'} alt={'test'}
                     className={'rounded-md object-scale-down w-1/2'}/>
                <div className={'w-1/2'}>
                <p className={'p-4'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>

            <div className={'flex w-1/3 bg-slate-950 rounded-md'}>
                <ul className={'p-4'}>
                    <li>TITLE</li>
                    <li>CATEGORY</li>
                    <li>STOCK</li>
                    <li>PRICE</li>
                    <button className={'mt-4 bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-md w-max px-4'}>BUY</button>
                </ul>
            </div>
        </div>
    );
}
