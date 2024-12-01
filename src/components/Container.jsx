import PropType from 'prop-types'
import style from './Container.module.css'

Container.propTypes={
    children:PropType.any
}

export default function Container({children}){
    return <div className={style.container}>
       
        {children}</div>
}