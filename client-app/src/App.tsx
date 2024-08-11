
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { Header, List, ListItem } from 'semantic-ui-react';

function App() {
  const [activities, SetActivities] = useState([]);  

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
      .then(response => {SetActivities(response.data)
    })
  },[])

  return (
    <div>
      <Header as = 'h2' icon='users' content='Reactivity'/>
      <List bulleted>
        {activities.map((activity: any) => (          
          <ListItem key={activity.id}>
              {activity.title}
          </ListItem>)
          )
        }
      </List>
    </div>
  )
}

export default App
