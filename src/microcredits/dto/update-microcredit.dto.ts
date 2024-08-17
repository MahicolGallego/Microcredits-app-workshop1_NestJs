import { PartialType } from "@nestjs/mapped-types";
import { CreateMicrocreditDto } from "./create-microcredit.dto";

export class UpdateMicrocredit extends PartialType(CreateMicrocreditDto){}