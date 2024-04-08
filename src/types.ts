enum Busyness {
    Full = "Полная",
    Partial = "Частичная",
    Project = "Проектная",
    Internship = "Стажировка",
}
enum WorkSchedule {
    FullDay = "Полный день",
    FlexSchedule = "Гибкий график",
    ShifrSchedule = "Сменный график",
    RemoteWork = "Удалённая работа",
    ShiftMethod = "Вахтовый метод"
}
enum Education {
    Higher = "",
    Secondary = "Среднее",
    SecondarySpecial = "Среднее специальное"
}
export interface IBaseInfoField {
    name: string,
    lastName: string,
    patronymic: string | undefined,
    phone: string,
    email: string,
    post: string,
    desiredSalary: string | undefined,
    workSchedule: WorkSchedule | undefined,
    isBusinnesTrips: boolean | undefined,
    busyness: Busyness | undefined
}
export interface IPersonalInfo {
    citizenship: string | undefined,
    cityOfResidence: string | undefined,
    dataOfBirth: string | undefined,
    isReadyMove: boolean | undefined,
    education: Education | undefined,
    sex: boolean | undefined,
}
export interface IWorkExperience {
    organization: string | undefined,
    post: string | undefined,
    getJob: string,
    leaveJob: string,
    jobResponsibilities: string | undefined
}
export interface IAdditionalInfo {
    foreignLanguages: string | undefined,
    personalQualities: string | undefined,
    aboutMe: string | undefined
}
export interface IForm {
    IBaseInfoField: IBaseInfoField
    personalInfo: IPersonalInfo | undefined,
    workExperience: IWorkExperience | undefined,
    additionalInfo: IAdditionalInfo | undefined
}