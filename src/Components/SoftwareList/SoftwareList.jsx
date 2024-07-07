import './SoftwareList.css'
import { Link } from 'react-router-dom';
import softwareDataList from './softwareDataList';
const SoftwareList = () => {

    const softwareItem = (image, category, title, description, id) => {
        return (
            <Link to={`/${category}/${title}/${id}`}>
                <div className='software-wrapper' key={id}>
                    <img src={image} alt="" />
                    <h4>{category}</h4>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <span className='none'>Read More...</span>
                </div>
            </Link>
        )
    }

    return (
        <div className='software-list-container'>
            <h2>Softwares</h2>
            <span>Download Clean Softwares Tool By GreyHatShadow For free</span>
            <div className="software-list-wrapper">
                {
                    softwareDataList.map((software) =>
                        softwareItem(
                            software.image,
                            software.category,
                            software.title,
                            software.description,
                            software.id
                        ))
                }
            </div>
        </div>
    )
}

export default SoftwareList;
