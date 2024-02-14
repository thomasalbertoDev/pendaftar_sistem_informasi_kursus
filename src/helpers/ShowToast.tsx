import Swal from 'sweetalert2';

const ShowToast = (icon: any, title: string) => {
  const toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
  });
  toast.fire({
    icon: icon,
    title: title,
    padding: '10px 20px',
  });
};

export default ShowToast;
