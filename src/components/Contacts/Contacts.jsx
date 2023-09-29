import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const Contacts = () => {
  return (
    <div>
      <ContactForm />
      <ContactList />
      <Filter />
    </div>
  );
};
