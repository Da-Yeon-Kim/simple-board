import { boardItem } from "@/types";

interface StorageKey {
  boardItems?: boardItem[];
}

const initStorage = <T extends keyof StorageKey>(key: T, storage: Storage) => {
  const storageKey = `${key}`;

  /* 로컬스토리지로부터 데이터 가져오기 */
  const get = (): StorageKey[T] | null => {
    const value = storage.getItem(storageKey);
    if (value === null) {
      return null;
    }
    try {
      return JSON.parse(value) as StorageKey[T];
    } catch (e) {
      console.error(`Error parsing storage key "${storageKey}":`, e);
      return null;
    }
  };

  /* 로컬스토리지에 데이터 저장하기 */
  const set = (value: StorageKey[T]) => {
    if (value === undefined || value === null) {
      return storage.removeItem(storageKey);
    }
    const stringifiedValue = JSON.stringify(value);
    storage.setItem(storageKey, stringifiedValue);
  };

  /* 로컬스토리지의 데이터 삭제하기 */
  const remove = () => {
    storage.removeItem(storageKey);
  };

  return { get, set, remove };
};

export const boardLocalStorage = initStorage("boardItems", localStorage);
