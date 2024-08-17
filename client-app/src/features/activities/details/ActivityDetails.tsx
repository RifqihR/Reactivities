import React from "react";
import { Button, ButtonGroup, Card, CardContent, CardDescription, CardHeader, CardMeta, Icon, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface props {
    activity : Activity
    cancleSeletedActivity : ()=> void;
    openForm: (id: string) =>void;
  }

export default function ActivitiesDetails({activity, cancleSeletedActivity, openForm}: props){
    return(
        <Card fluid>
        <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
        <CardContent>
          <CardHeader>{activity.title}</CardHeader>
          <CardMeta>
            <span>{activity.date}</span>
          </CardMeta>
          <CardDescription>
            {activity.description}
          </CardDescription>
        </CardContent>
        <CardContent extra>
         <ButtonGroup widths={'2'}>
            <Button onClick={() => openForm(activity.id)} basic color="blue" content='edit'/>
            <Button onClick={cancleSeletedActivity}basic color="grey" content='cancle'/>
         </ButtonGroup>
        </CardContent>
      </Card>
    )
}