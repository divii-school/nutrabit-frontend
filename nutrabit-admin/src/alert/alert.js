import Swal from 'sweetalert2';

const Toast2 = Swal.mixin({
  toast: true,
  position: 'top-right',
  iconColor: 'white',
  background: '#f8bb86',
  customClass: {
    popup: 'colored-toast'
    
  },
  showConfirmButton: false,
  timer:  2500,
  timerProgressBar: true
});

export default Toast2;
