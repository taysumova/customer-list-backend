export class CreateSurveyDTO {
    readonly option_title: string;
    readonly title: string;
    readonly type: string;
    readonly value: string;
    readonly selectedOps: object;
    readonly created_at: Date;
}
