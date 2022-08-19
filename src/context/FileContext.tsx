import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

type ImageInfoType = {
  src: string
}

type SheetInfoType = {
  src: string
  total: number
  name: string
}

type FileStorageType = {
  imageInfoArray: ImageInfoType[]
  sheetInfoArray: SheetInfoType[]
}

type FileContextType = {
  imageInfoArray: ImageInfoType[]
  sheetInfoArray: SheetInfoType[]
  addImage: (src: string) => void
  addSheet: (obj: SheetInfoType) => void
}

const FileContext = createContext<FileContextType>({
  imageInfoArray: [],
  sheetInfoArray: [],
  addImage: () => {},
  addSheet: () => {},
})

const getInitialFileContext = async () => {
  const defaultValue: FileStorageType = {
    imageInfoArray: [],
    sheetInfoArray: [],
  }
  try {
    const rawValue = await AsyncStorage.getItem('@file-mngmt-state')
    const jsonValue: FileStorageType = !!rawValue
      ? (JSON.parse(rawValue) as FileStorageType)
      : defaultValue
    return jsonValue
  } catch (e) {
    return defaultValue
  }
}

export const FileContextProvider = ({ children }: { children: ReactNode }) => {
  const [imageInfoArray, setImageInfoArray] = useState<ImageInfoType[]>([])
  const [sheetInfoArray, setSheetInfoArray] = useState<SheetInfoType[]>([])

  useEffect(() => {
    const getDefaultValues = async () => {
      const { imageInfoArray, sheetInfoArray } = await getInitialFileContext()
      setImageInfoArray(imageInfoArray)
      setSheetInfoArray(sheetInfoArray)
    }
    getDefaultValues()
  }, [])

  const updateStorage = async () => {
    const data: FileStorageType = {
      imageInfoArray,
      sheetInfoArray,
    }
    await AsyncStorage.setItem('@file-mngmt-state', JSON.stringify(data))
  }

  const addImage = (src: string) => {
    const newArray = [...imageInfoArray, { src }]
    setImageInfoArray(newArray)
    updateStorage()
  }

  const addSheet = ({ src, name, total }: SheetInfoType) => {
    const newArray = [...sheetInfoArray, { src, name, total }]
    setSheetInfoArray(newArray)
    updateStorage()
  }

  return (
    <FileContext.Provider
      value={{ imageInfoArray, sheetInfoArray, addImage, addSheet }}
    >
      {children}
    </FileContext.Provider>
  )
}

export const useFileContext = () => useContext(FileContext)
