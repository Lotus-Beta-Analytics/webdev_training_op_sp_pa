import { useLogin } from "./auth";
import {
  useInitiatives,
  useAddInitiative,
  useUpdateInitiative,
  useDeleteInitiative,
} from "./initiative";
import { useTypes } from "./type";
import { useStatuses } from "./status";
import { useUsers } from "./user";

export default {
  useLogin,

  useInitiatives,
  useAddInitiative,
  useUpdateInitiative,
  useDeleteInitiative,

  useTypes,
  useStatuses,
  useUsers,
};
