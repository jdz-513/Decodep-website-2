import { supabase } from '../lib/supabase'

const getTable = (tableName: string) => supabase?.from(tableName)

