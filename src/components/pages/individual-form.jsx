import React from 'react'
import { ListItem, FormLabel, FormInput, List } from 'framework7-react'
// BITCHES
export const IndividualForm = () => {
  return (
    <List className form>
      <ListItem>
        <FormLabel>Email: </FormLabel>
        <FormInput type="text" placeholder="Email" />
      </ListItem>

      <ListItem>
        <FormLabel>Name: </FormLabel>
        <FormInput type="text" placeholder="Name" />
      </ListItem>

      <ListItem>
        <FormLabel>Address: </FormLabel>
        <FormInput type="text" placeholder="Address" />
      </ListItem>

      <ListItem>
        <FormLabel>Phone: </FormLabel>
        <FormInput type="text" placeholder="Phone" />
      </ListItem>

      <ListItem>
        <FormLabel>Employment: </FormLabel>
        <FormInput type="text" placeholder="Employment" />
      </ListItem>

      <ListItem>
        <FormLabel>Household Income: </FormLabel>
        <FormInput type="text" placeholder="Income" />
      </ListItem>

      <ListItem>
        <FormLabel>Estimated Investment: </FormLabel>
        <FormInput type="text" placeholder="Investment" />
      </ListItem>

      <ListItem>
        <FormLabel>Household Income: </FormLabel>
        <FormInput type="password" placeholder="Password" />
      </ListItem>
    </List>
  )
}
