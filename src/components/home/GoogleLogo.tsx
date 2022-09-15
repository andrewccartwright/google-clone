import googleLogo from '../../images/google-logo.png';

const GoogleLogo = (props: {id: string, imgId: string}) => {
    return (
        <div id={props.id}>
            <img id={props.imgId} src={googleLogo} />
        </div>
    )
}

export default GoogleLogo;