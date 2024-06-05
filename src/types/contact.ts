export default interface Contact {
    _id: string;
    firstName: string;
    lastName?: string,
    email?: string;
    phone?: string;
    company?: string;
    position?: string;
    links?: {
        website?: string,
        linkedIn?: string,
        github?: string,
        instagram?: string,
    }
    notes?: string;
    contactMethod?: string;
    lastContactedDate?: Date | string;
    createdAt: Date | string;
    updatedAt?: Date | string;
}