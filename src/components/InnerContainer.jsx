import PropTypes from "prop-types"
import style from './InnerContainer.module.css'

InnerContainer.propTypes={
    children:PropTypes.any,
}

export default function InnerContainer({children}){

    return <div className={style.innerContainer}>
        {children}
    </div>

}