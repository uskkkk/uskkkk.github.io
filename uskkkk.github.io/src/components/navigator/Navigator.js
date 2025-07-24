import '../../styles/Navigator.css'

function Navigator(props) {
    return (
        <div className="navigator-container">
            <div className='navigator-title'>{props.title}</div>
            <div className='navigator-menu-box'>
                <div className='navigator-menu'>{props.home}</div>
                <div className='navigator-menu'>{props.skill}</div>
                <div className='navigator-menu'>{props.contact}</div>
            </div>
            <div className='navigator-hambuger-toggle'>
                <div className='hambuger-top-line'></div>
                <div className='hambuger-middle-line'></div>
                <div className='hambuger-bottom-line'></div>
            </div>
        </div>
    );
}

export default Navigator;