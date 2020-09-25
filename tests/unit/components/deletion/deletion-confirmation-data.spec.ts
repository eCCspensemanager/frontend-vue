import DeletionConfirmationData from '@/components/deletion/deletion-confirmation-data';

describe('deletion-confirmation-data', () => {
  it('constructs values to correct default', () => {
    let data = new DeletionConfirmationData();

    expect(data.showConfirmation).toBe(false);
    expect(data.deletionName).toBe('null');
  });

  it('updates correctly in show function', () => {
    let data = new DeletionConfirmationData();
    let mockedFunction = jest.fn();

    data.show('show called', mockedFunction);

    expect(data.showConfirmation).toBe(true);
    expect(data.deletionName).toBe('show called');
    expect(data.action).toBe(mockedFunction);
  });
});
