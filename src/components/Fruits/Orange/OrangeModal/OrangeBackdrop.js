
const orangeBackdrop = (props) => {
    const style={
        backgroundColor: 'brown',
        width: '100%',
        height: '100%',
        position: 'fixed',
        display: 'flex',
        top: '0',
        left: '0',
        zIndex: '100',
        opacity: '0.5'

}

    let show = null;
    if(props.showOrange) {
        show = <div onClick={props.orangeCancelHandler} style={style}></div>
    }
    return (
    <header>
        {show}
    </header>
)};

export default orangeBackdrop;