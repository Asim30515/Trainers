/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './App.css'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
export default function EditCoach() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      age: '',
      citizenship: '',
      last_club: '',
      image: '',
      Ucl_winners: '',
      Uel_winners: '',
      League_winners: '',
      Usc: '',
      Fwc: ''
    },
    onSubmit: values => {
      melumatlariYenile(values);
    }
  });

  const melumatlariGetir = async (id) => {
    try {
      const req = await axios.get(`http://localhost:3000/Coachs/${id}`);
      if (req.status === 200) {
        const res = await req.data;
        console.log(res);
        formik.setFieldValue('name', res.name);
        formik.setFieldValue('surname', res.surname);
        formik.setFieldValue('age', res.age);
        formik.setFieldValue('citizenship', res.citizenship);
        formik.setFieldValue('last_club', res.last_club);
        formik.setFieldValue('image', res.image);
        formik.setFieldValue('Ucl_winners', res.Ucl_winners);
        formik.setFieldValue('Uel_winners', res.Uel_winners);
        formik.setFieldValue('League_winners', res.League_winners);
        formik.setFieldValue('Usc', res.Usc);
        formik.setFieldValue('Fwc', res.Fwc);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const melumatlariYenile = async (values) => {
    try {
      const req = await axios.patch(`http://localhost:3000/Coachs/${id}`,values)
      if (req.status === 200) {
        const res = await req.data;
        toast.success("ugurla yaradildi")
                navigate('/')
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    melumatlariGetir(id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])


  return (
    <form className='form' onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      <label htmlFor="surname">Surname</label>
      <input
        id="surname"
        name="surname"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.surname}
      />
      <label htmlFor="age">Age</label>
      <input
        id="age"
        name="age"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.age}
      />
      <label htmlFor="citizenship">citizenship</label>
      <input
        id="citizenship"
        name="citizenship"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.citizenship}
      />
      <label htmlFor="last_club">last_club</label>
      <input
        id="last_club"
        name="last_club"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.last_club}
      />
      <label htmlFor="image">image</label>
      <input
        id="image"
        name="image"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.image}
      />
      <label htmlFor="Ucl_winners">Ucl Winners</label>
      <input
        id="Ucl_winners"
        name="Ucl_winners"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Ucl_winners}
      />
      <label htmlFor="Uel_winners">Uel Winners</label>
      <input
        id="Uel_winners"
        name="Uel_winners"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Uel_winners}
      />
      <label htmlFor="League_winners">League Winners</label>
      <input
        id="League_winners"
        name="League_winners"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.League_winners}
      />
      <label htmlFor="Usc">Uefa Super Cup</label>
      <input
        id="Usc"
        name="Usc"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Usc}
      />
      <label htmlFor="Fwc">Fifa World Cup </label>
      <input
        id="Fwc"
        name="Fwc"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Fwc}
      />
      <button type="submit">Submit</button>
    </form>
  )
}