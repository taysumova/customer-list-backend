export class CreateCustomerDTO {
    readonly last_name: string;
    readonly first_name: string;
    readonly middle_name: string;
    readonly email: string;
    readonly phone: string;
    readonly address: string;
    readonly additionalInfo: string;
    readonly status: string;
    readonly created_at: Date;
}
