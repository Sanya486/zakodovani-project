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
      const calculationPromise = axios.post('identification/calculateDailyMetrics', data);
      toast.promise(
        calculationPromise,
        {
          loading: 'Calculate all data..',
          success: `Successful calculatation your data. Let's do some exercise 👍`,
          error: 'Error when calculate. Please try later 😓',
        },
        {
          error: {
            duration: 5000,
          },
        },
      );
      const response = await calculationPromise;
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchUpload = createAsyncThunk('/identification/upload', async (data, thunkAPI) => {
  try {
    const fetchPromise = axios.patch('identification/upload', data);
    toast.promise(
      fetchPromise,
      {
        loading: 'Updating your data 🙂',
        success: `Update your data successfully 👍`,
        error: 'Error with update. Please check all data and try again 😓',
      },
      {
        error: {
          duration: 5000,
        },
      },
    );
    const response = await fetchPromise;
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
      const currentUserPromise = axios.get('identification/currentUser');
      toast.promise(
        currentUserPromise,
        {
          loading: 'Regain your data 🙂',
          success: `Successfuly regain your data. Let's do some exercise 👍`,
          error: 'Error when regain. Please try later 😓',
        },
        {
          error: {
            duration: 5000,
          },
        },
      );
      const response = await currentUserPromise;
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchLogout = createAsyncThunk('/identification/logout', async (_, thunkAPI) => {
  try {
    const logoutPromise = axios.post('identification/logout');
    toast.promise(
      logoutPromise,
      {
        loading: 'See you soon 🙂',
        success: `Good Bye 🤗`,
        error: 'Error when logout. Please try later 😓',
      },
      {
        error: {
          duration: 5000,
        },
      },
    );
    clearAuthorization();
    const response = await logoutPromise;
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

// =========== Products fetches ===========

export const fetchProducts = createAsyncThunk(
  'products/',
  async ({ page, limit, recommendation = 'all', category = '' }, thunkAPI) => {
    try {
      const response = await axios.get(
        `products?page=${page}&limit=${limit}&recommendation=${recommendation}&category=${category}`,
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

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
      const promise = axios.get(`products/categories/${type}`);
      toast.promise(
        promise,
        {
          loading: 'Finding some suitable food for You 🙂',
          success: `Here your products. Let's find something to eat 👍`,
          error: 'Error when searchung products. Please try later 😓',
        },
        {
          error: {
            duration: 5000,
          },
        },
      );

      const response = await promise;
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

// =========== Exercise fetches ===========

export const fetchExercises = createAsyncThunk('/exercises', async (_, thunkAPI) => {
  try {
    const promise = axios.get('exercises');
    toast.promise(
      promise,
      {
        loading: 'Finding some easy exercises for You 🙂',
        success: `Here your exercises. Let's rock 🤘`,
        error: 'Error when searchung products. Please try later 😓',
      },
      {
        error: {
          duration: 5000,
        },
      },
    );

    const response = await promise;
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
      const evercisePromise = axios.get(`exercises/${name}`, {
        params: {
          filter,
        },
      });
      toast.promise(
        evercisePromise,
        {
          loading: 'Loading your exercise...🤔',
          success: 'Let`s go!',
          error: 'Error loading your exercise. Please try later.',
        },
        {
          error: {
            duration: 5000,
          },
        },
      );

      const response = await evercisePromise;
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
      const promise = axios.post('diary/save-product', data);
      toast.promise(
        promise,
        {
          loading: 'Saving your meal 🙂',
          success: `Well done. Your meal was added to Diary 👍`,
          error: 'Error when saving meal. Please try later 😓',
        },
        {
          error: {
            duration: 5000,
          },
        },
      );

      const response = await promise;
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
      const promise = axios.post('diary/save-exercise', data);
      toast.promise(
        promise,
        {
          loading: 'Saving your exercise 🙂',
          success: `Well done. Your exercise was added to Diary 👍`,
          error: 'Error when saving exercises. Please try later 😓',
        },
        {
          error: {
            duration: 5000,
          },
        },
      );

      const response = await promise;
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
      const promise = axios.delete(`diary/delete-exercise/${id}`);
      toast.promise(
        promise,
        {
          loading: 'Deleting your exercise 🙂',
          success: `Well done. Your exercise was deleted from Diary 👍`,
          error: 'Error when deleting exercise. Please try later 😓',
        },
        {
          error: {
            duration: 5000,
          },
        },
      );

      await promise;
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
      const promise = axios.get(`diary/diary-date-info/${date}`);
      toast.promise(
        promise,
        {
          loading: 'Loading Your Diary 🙂',
          success: `Well done. Let's check our notes 👍`,
          error: 'Error when loading diary. Please try another date 😓',
        },
        {
          error: {
            duration: 5000,
          },
        },
      );

      const response = await promise;
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
      const promise = axios.delete(`diary/delete-product/${productId}`);
      toast.promise(
        promise,
        {
          loading: 'Deleting your meal 🙂',
          success: `Well done. Your meal was deleted from Diary 👍`,
          error: 'Error when deleting meal. Please try later 😓',
        },
        {
          error: {
            duration: 5000,
          },
        },
      );

      await promise;
      const filteredConsumedProduct = consumedProduct.filter((product) => product.id !== productId);
      return filteredConsumedProduct;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
export const fetchStatistic = createAsyncThunk('/statistics', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`/statistics`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
