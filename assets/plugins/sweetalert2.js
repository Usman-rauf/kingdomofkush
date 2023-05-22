import Swal from 'sweetalert2';
export default function useSweetAlert() {
  const showAlert = (options) => {
    return Swal.fire(options);
  };
  const _alertObject = {
    timer: 2000,
    timerProgressBar: true,
    scrollbarPadding: false,
    showConfirmButton: false,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  }
  const showConfirm = Swal.mixin({
    showCancelButton: true,
    cancelButtonText: 'back',
    confirmButtonText: 'confirm',
    cancelButtonColor: '#171717',
    confirmButtonColor: '#db232e',
  });
  const showSuccess = Swal.mixin(Object.assign({}, _alertObject, { icon: 'success' }));
  const showWarning = Swal.mixin(Object.assign({}, _alertObject, { icon: 'warning' }));
  const showError = Swal.mixin(Object.assign({}, _alertObject, { icon: 'error' }));
  return { showAlert, showConfirm, showSuccess, showError, showWarning};
};
