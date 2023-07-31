import { User } from "@prisma/client"
import { GraphQLScalarType, Kind } from 'graphql';

interface AnnouncementInput {
    title: string,
    content: string
}

interface ToolInput {
    name: string,
    partName: string,
    category: string,
    position: string,
    description: string,
    photoLink: string,
    usage: number,
    tutorialLink: string,
    remain: number
}

interface DisposableMaterialInput {
    name: string,
    partName: string | null,
    category: string,
    position: string,
    description: string,
    photoLink: string,
    usage: number,
    tutorialLink: string,
    fee: number | null,
    remain: boolean
}

interface MaterialInput {
    name: string,
    partName: string|null,
    category: string,
    valuable: boolean,
    position: string,
    description: string,
    photoLink: string,
    usage: number,
    tutorialLink: string,
    fee: number,
    remain: number
}

interface MachineInput {
    name: string,
    partName: string,
    category: string,
    position: string,
    description: string,
    photoLink: string,
    usage: number,
    tutorialLink: string
}


interface UserMaterialInput{
    name: string,
    partName: string,
    borrower: User,
    borrowerId: number,
    borrowNum: number,
    borrowDate: string,
    returnDate: string,
    status: string
}

interface ThreeDPInput{
    name: string,
    category: string,
    position: string,
    description: string,
    photoLink: string,
    usage: number,
    tutorialLink: string,
    waiting: User
}
export { AnnouncementInput, ToolInput, UserMaterialInput, ThreeDPInput, DisposableMaterialInput, MachineInput, MaterialInput }
