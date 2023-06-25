import { SubTitle, Title, Wrap, Container } from './ContactsPage.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React from 'react';

const ContactsPage = () => {
  return (
    <Container>
      <Wrap>
        <Title>Phonebook</Title>
        <ContactForm />
      </Wrap>
      <Wrap>
        <SubTitle>Contacts</SubTitle>
        <Filter />
        <ContactList></ContactList>
      </Wrap>
    </Container>
  );
};

export default ContactsPage;
