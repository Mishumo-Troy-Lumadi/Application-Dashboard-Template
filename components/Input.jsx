export default function Input({id, type, label, text, onChange, containerStyle,labelStyle,className }) {

    function change(e){
        if(onChange != null){
        onChange(e.target.value)
        }
    }

    return (
        <div className={`flex w-full ${containerStyle}`}>
            <label className={`${labelStyle}`} htmlFor={id}>{label}</label>
            <input className={`w-fit text-sm focus:border-purple-800 focus:ring-purple-800 bg-white border-gray-300 rounded-lg shadow-sm ${className}`} id={id} onChange={change} type={type} placeholder={text}/>
        </div>
    )
}