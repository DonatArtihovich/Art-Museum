import { PRIVATE_DOMAIN, PUBLIC_DOMAIN } from "@constants/const";

export const getDomainСonfidentiality = (isPublicDomain: boolean): string => isPublicDomain ? PUBLIC_DOMAIN : PRIVATE_DOMAIN;