import ptBr from "date-fns/locale/pt-BR"
import { formatDistanceToNow } from "date-fns"

export function compareDistanceToNow(date: string | Date) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: ptBr
  })
}