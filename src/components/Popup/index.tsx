import './index.scss'

export default function Popup(props: any) {

    return (
        <div className="popup">
            {props.children}
        </div>
    )
}