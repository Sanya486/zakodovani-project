import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://teamproject-powerpulse-group4.onrender.com/';

const setAuthorization = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthorization = () => {
  axios.defaults.headers.common.Authorization = '';
};

// =========== Identification fetches ===========

export const fetchSignup = createAsyncThunk('/identification/signup', async (user, thunkAPI) => {
  try {
    const fetchPromise = axios.post('identification/signup', user);
    toast.promise(
      fetchPromise,
      {
        loading: 'Loading...🤔 Please wait a moment until our freeware API will be ready 😴',
        success: `Successful Signup 👍`,
        error: 'Error when Signup. Please check your credentials 😓',
      },
      {
        error: {
          duration: 5000,
        },
      },
    );
    const response = await fetchPromise;
    setAuthorization(response.data.token);
    const userName = response.data.client.name;
    toast.success(`Welcome to PowerPulse, ${userName} 🙂`, {
      duration: 5000,
    });
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fetchLogin = createAsyncThunk('/identification/login', async (user, thunkAPI) => {
  try {
    const fetchPromise = axios.post('identification/login', user);
    toast.promise(
      fetchPromise,
      {
        loading: 'Loading...🤔 Please wait a moment until our freeware API will be ready 😴',
        success: `Successful Login 👍`,
        error: 'Error when Login. Please check your credentials 😓',
      },
      {
        error: {
          duration: 5000,
        },
      },
    );
    const response = await fetchPromise;
    setAuthorization(response.data.token);
    const userName = response.data.client.name;
    toast.success(`Welcome back, ${userName}`, {
      duration: 5000,
    });
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fetchCalculateDailyMetrics = createAsyncThunk(
  '/identification/calculateDailyMetrics',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('identification/calculateDailyMetrics', data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchUpload = createAsyncThunk('/identification/upload', async (data, thunkAPI) => {
  try {
    const response = await axios.patch('identification/upload', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  '/identification/currentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    if (!state.auth.token) {
      return thunkAPI.rejectWithValue();
    }
    setAuthorization(state.auth.token);
    try {
      const response = await axios.get('identification/currentUser');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchLogout = createAsyncThunk('/identification/logout', async (_, thunkAPI) => {
  try {
    const response = await axios.post('identification/logout');
    clearAuthorization();
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

// =========== Products fetches ===========

export const fetchProducts = createAsyncThunk('/products', async ({page, limit}, thunkAPI) => {
  try {
    const response = await axios.get(`products?page=${page}&limit=${limit}`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fetchProductsCategories = createAsyncThunk(
  '/products/categories',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('products/categories');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchAvaibleBloodProducts = createAsyncThunk(
  '/products/available-blood-products/:type',
  async (type, thunkAPI) => {
    try {
      const response = await axios.get(`products/categories/${type}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

// =========== Exercise fetches ===========

export const fetchExercises = createAsyncThunk('/exercises', async (_, thunkAPI) => {
  try {
    const response = await axios.get('exercises');
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fetchExercisesTypes = createAsyncThunk('/exercises/all-types', async (_, thunkAPI) => {
  try {
    const response = await axios.get('exercises/all-types');
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fetchExercisesByName = createAsyncThunk(
  '/exercises/{exerciseName}',
  async ({ name, filter }, thunkAPI) => {
    try {
      const response = await axios.get(`exercises/${name}`, {
        params: {
          filter,
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

// =========== Dairy fetches ===========

export const fetchDiarySaveProduct = createAsyncThunk(
  '/diary/save-product',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('diary/save-product', data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchDiarySaveExercise = createAsyncThunk(
  '/diary/save-exercise',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('diary/save-exercise', data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchDeleteExercise = createAsyncThunk(
  '/diary/delete-exercise/{exerciseId}',
  async (id, thunkAPI) => {
    const {
      diary: {
        data: { exerciseDone },
      },
    } = thunkAPI.getState();
    try {
      await axios.delete(`diary/save-exercise/${id}`);
       const filteredExerciseDone = exerciseDone.filter((exercise) => exercise.id !== id);
      return filteredExerciseDone;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchDiaryDateInfo = createAsyncThunk(
  '/diary/diary-date-info/{date}',
  async (date, thunkAPI) => {
    try {
      const response = await axios.get(`diary/diary-date-info/${date}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchDeleteProduct = createAsyncThunk(
  '/diary/delete-product/{productId}',
  async (productId, thunkAPI) => {
    const {
      diary: {
        data: { consumedProduct },
      },
    } = thunkAPI.getState();
    try {
      await axios.delete(`diary/delete-product/${productId}`);
      const filteredConsumedProduct = consumedProduct.filter((product) => product.id !== productId);
      return filteredConsumedProduct;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
