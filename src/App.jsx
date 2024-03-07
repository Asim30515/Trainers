import { Card, CardBody, CardFooter, Image, Stack, Heading, Divider, ButtonGroup, Button, } from '@chakra-ui/react'
import { useState, useEffect } from "react";
import axios from 'axios';
import './App.css'

import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
function App() {
  const [coach, setCoach] = useState([]);
  const [toCoach, setToCoach] = useState([]);

  const melumatlariSil = async (id) => {
    try {
      const req = await axios.delete(`http://localhost:3000/Coachs/${id}`)
      if (req.status === 200) {
        toast.success("ugurla silindi")
        ToCoachs()
  
      }
    } catch (error) {
      console.error(error);
    }
  };

  const ToCoachs = async () => {

    try {
      const sorgu = await axios.get('http://localhost:3000/Coachs')
      const cavab = await sorgu.data;
      setCoach(cavab);
      setToCoach(cavab)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    ToCoachs();
  }, [])

  return (
    <>
 
      <section>
        <div className='one'>
          <span>Top Coachs in World</span>
        </div>
        <div className="cards">
          {
            toCoach.length > 0 && toCoach.map(item => (
              <div className="card" key={item.id}>
                <Card maxW='sm'>
                  <CardBody>
                    <Image className='foto'
                      src={item.image}
                      alt='Green double couch with wooden legs'
                      borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                      <Stack style={{ flexDirection: "row", justifyContent: "space-evenly" }} mt='1' spacing='3'>
                        <Heading className='sual' size='md'>Name :</Heading>
                        <Heading className='text' size='md'>{item.name}</Heading>
                      </Stack>
                      <Stack style={{ flexDirection: "row", justifyContent: "space-evenly" }} mt='1' spacing='3'>
                        <Heading className='sual' size='md'>Surname :</Heading>
                        <Heading className='text' size='md'>{item.surname}</Heading>
                      </Stack>
                      <Stack style={{ flexDirection: "row", justifyContent: "space-evenly" }} mt='1' spacing='3'>
                        <Heading className='sual' size='md'>Age :</Heading>
                        <Heading className='text' size='md'>{item.age}</Heading>
                      </Stack>
                      <Stack style={{ flexDirection: "row", justifyContent: "space-evenly" }} mt='1' spacing='3'>
                        <Heading className='sual' size='md'>Citizenship :</Heading>
                        <Heading className='text' size='md'>{item.citizenship}</Heading>
                      </Stack>
                      <Stack style={{ flexDirection: "row", justifyContent: "space-evenly" }} mt='1' spacing='3'>
                        <Heading className='sual' size='md'>Last Club :</Heading>
                        <Heading className='text' size='md'>{item.last_club}</Heading>
                      </Stack>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup spacing='2'>
                      <Link className='but' to={`/coach/${item.id}`}>
                        In more detalis
                      </Link>
                      <Link className='but' to={`/edit/${item.id}`}>
                        Edit the coach
                      </Link>
                      <button className='but' onClick={()=>melumatlariSil(item.id)}>
                        Delete the coach
                      </button>
                      <Link className='but' to={`/create`}>
                        New coach
                      </Link>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default App
