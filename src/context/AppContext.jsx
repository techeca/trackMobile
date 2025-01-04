import React, { createContext, useContext, useState, useEffect } from "react";
import { getAllSubscriptions, getAllCategories, addSubscription, addCategory, updateSubscription as updateSub, initUser } from "../services/user";

// Crear el contexto
const AppContext = createContext();

// Proveedor
export const AppProvider = ({ children }) => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [categories, setCategories] = useState([]);

  // Función para añadir una nueva suscripción
  const newSubscription = (newSub) => {
    let newSubs = addSubscription(newSub);
    setSubscriptions(newSubs)
  };

  const newCategory = (newCat) => {
    let newCats = addCategory(newCat);
    setCategories(newCats)
  }

  // Función para eliminar una suscripción
  const removeSubscription = (id) => {
    let tempNewList = subscriptions.filter((sub) => sub.id !== Number(id))
    setSubscriptions(tempNewList);
    updateSub(tempNewList)
  };

  // Función para actualizar una suscripción existente
  const updateSubscription = (id, updatedData) => {
    setSubscriptions((prev) =>
      prev.map((sub) => (sub.id === id ? { ...sub, ...updatedData } : sub))
    );
  };

  useEffect(() => {
    initUser()
    setSubscriptions(JSON.parse(getAllSubscriptions()))
    setCategories(JSON.parse(getAllCategories()))
  }, [])

  return (
    <AppContext.Provider value={{ 
      subscription:{
        all: subscriptions,
        add: newSubscription,
        remove: removeSubscription,
        update: updateSubscription,
      },
      category: {
        all: categories,
        add: newCategory,
        remove: () => {},
        update: () => {},
      },
      user: {
        name: 'Joe Doe',
        email: 'j.doe@mail.com'
      }
    }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useAppFn = () => useContext(AppContext);
