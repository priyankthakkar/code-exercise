export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  conversationCount: string;
  avatar: string;
}

export interface ContactsResponse {
  recordCount: number;
  contacts: Contact[];
}

export interface ContactsState {
  isLoading: boolean;
  contactsResponse: ContactsResponse;
}

export interface ConatctComponentProps {
  contact: Contact;
}
