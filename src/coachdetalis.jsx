import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import './App.css'

export default function Coachdetalis() {
  const {id}  = useParams();
  const [coachDetail, setCoachDetail] = useState({})
  const fetchCoach = async reqem => {
    try {
      const req = await axios.get(`http://localhost:3000/Coachs/${reqem}`);
      if (req.status === 200) {
        const res = await req.data;
        setCoachDetail(res)
      }
    } catch (error) {
      console.error(error);
    }
  }



  useEffect(()=>{
    fetchCoach(id)
  },[id])

  return (
    <>
    <div className="backfone">
    <div className="details" key={coachDetail.id}>
      <img className="photo" src={coachDetail.image} alt="" />
      <div className="orta">
      <div className="sual">
        <span>Name :</span>
        <span>Surname :</span>
        <span>Age :</span>
        <span>Citizenship :</span>
        <span>Last club :</span>
        <span>Uefa Champions League :</span>
        <span>Uefa Europa League :</span>
        <span>League Winners :</span>
        <span>Uefa Super Cup :</span>
        <span>Fifa World Clubs Cup :</span>
      </div>
      <div className="cavab">
        <span>{coachDetail.name}</span>
        <span>{coachDetail.surname}</span>
        <span>{coachDetail.age}</span>
        <span>{coachDetail.citizenship}</span>
        <span>{coachDetail.last_club}</span>
        <span>{coachDetail.Ucl_winners}</span>
        <span>{coachDetail.Uel_winners}</span>
        <span>{coachDetail.League_winners}</span>
        <span>{coachDetail.Usc}</span>
        <span>{coachDetail.Fwc}</span>
      </div>
      </div>
    </div>
    </div>
    </>
  )
}
