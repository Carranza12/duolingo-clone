export interface Question{
    type:string;
    label:string;
    answers:answer[];

}
export interface answer{
    label:string;
    isCorrect:boolean;
    src?:string;
}