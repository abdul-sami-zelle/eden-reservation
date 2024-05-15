function LabelHeading({text,color,fontSize,margin,family,weight}) {
    return <>
        <h4 style={
            {
                fontFamily:`${family}`,
                color:`${color}`,
                fontSize:`${fontSize}`,
                margin:`${margin}`,
                fontWeight:`${weight}`
            }
        }>
            {text}
        </h4>
    </>
}
export default LabelHeading;