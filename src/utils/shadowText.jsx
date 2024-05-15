function ShadowText({text,color,fontSize,margin,family,shadow,cursor,weight}) {
    return <>
        <h1 style={
            {
                fontFamily:`${family}`,
                color:`${color}`,
                fontSize:`${fontSize}`,
                margin:`${margin}`,
                textShadow:`${shadow}`,
                cursor:`${cursor}`,
                fontWeight:`${weight}`
            }
        }>
            {text}
        </h1>
    </>
}
export default ShadowText;