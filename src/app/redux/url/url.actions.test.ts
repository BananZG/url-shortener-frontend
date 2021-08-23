import { fetchAllUrls, addUrl, deleteUrl } from './url.actions';

import { axiosInstance } from '../../utils/network/axios.util';
import { dummyUrl } from '../../utils/test/mockStore';

jest.mock('../../utils/network/axios.util');

describe('urlSlice', () => {
  it('should trigger update on urls', async () => {
    const dispatch = jest.fn();
    (axiosInstance.get as jest.Mock).mockResolvedValueOnce({
      data: [dummyUrl],
    });
    await fetchAllUrls()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(2);
  });

  // Create Url
  it('should trigger update on create new url', async () => {
    const dispatch = jest.fn();
    (axiosInstance.post as jest.Mock).mockResolvedValueOnce({
      data: {
        newUrl: dummyUrl,
      },
    });
    (axiosInstance.get as jest.Mock).mockResolvedValueOnce({
      data: [dummyUrl],
    });
    await addUrl(dummyUrl.longUrl)(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(3);
  });

  it('should trigger exception on create new url', async () => {
    const dispatch = jest.fn();
    const message = 'error';
    (axiosInstance.post as jest.Mock).mockRejectedValueOnce({
      response: {
        data: {
          message,
        },
      },
    });
    await addUrl(dummyUrl.longUrl)(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(2);
  });

  it('should trigger exception on create new url 2', async () => {
    const dispatch = jest.fn();
    const message = 'error';
    (axiosInstance.post as jest.Mock).mockRejectedValueOnce({
      message,
    });
    await addUrl(dummyUrl.longUrl)(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(2);
  });

  // Delete Url
  it('should trigger update on delete url', async () => {
    const dispatch = jest.fn();
    (axiosInstance.delete as jest.Mock).mockResolvedValueOnce({
      data: dummyUrl,
    });
    (axiosInstance.get as jest.Mock).mockResolvedValueOnce({
      data: [dummyUrl],
    });
    await deleteUrl(dummyUrl._id)(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(3);
  });

  it('should trigger exception on delete url', async () => {
    const dispatch = jest.fn();
    const message = 'error';
    (axiosInstance.delete as jest.Mock).mockRejectedValueOnce({
      response: {
        data: {
          message,
        },
      },
    });
    await deleteUrl(dummyUrl._id)(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(2);
  });

  it('should trigger exception on delete url 2', async () => {
    const dispatch = jest.fn();
    const message = 'error';
    (axiosInstance.delete as jest.Mock).mockRejectedValueOnce({
      message,
    });
    await deleteUrl(dummyUrl._id)(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(2);
  });
});
