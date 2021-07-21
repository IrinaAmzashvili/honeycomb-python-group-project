// import React, {useEffect} from 'react'
// import { useParams } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux';
// import { getSingleClub } from '../../store/clubs';
// import styles from './IndividualClub.module.css';
// import EditClubForm from '../EditClubForm';


// const IndividualClub = () => {
//     const sessionUser = useSelector(state => state.session.user)
//     const {id} = useParams();
//     const club = useSelector(state => state.clubs.singleClub)
//     // const club = useSelector(state => state.club)
//     const dispatch = useDispatch()



//     useEffect(() => {
//         dispatch(getSingleClub(parseInt(id)))
//     }, [dispatch, id])


//     return (
//         <>
//             <div className={styles.redCrossBar}>
//             </div>
//             <div className={styles.clubInfoContainer}>
//             <div className={styles.container}>
//                 <div className={styles.image}>
//                     <img className={styles.clubImage} src={club?.img_url}/>
//                 </div>
//                 <div className={styles.clubinfo}>
//                     <p className={styles.clubName}>{club?.name}</p>
//                     <button className={styles.joinButton}>Join club</button>
//                     <p>Organized by (name here)</p>
//                     <p className={styles.clubDescription}>{club?.description}</p>
//                     {sessionUser.id === club?.host_id &&
//                     <div>
//                         <button className={styles.editButton}>Edit</button>
//                         <button className={styles.deleteButton}>Delete</button>
//                     </div>}
//                 </div>
//             </div>
//             </div>
//             <EditClubForm clubId={id}/>
//         </>
//     )
// }

// export default IndividualClub;
