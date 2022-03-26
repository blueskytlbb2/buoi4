function check()
{
	var tdn = f.US.value;
	var mk = f.PW.value;
	
	if(tdn =='')
	{
		alert('Tên đăng nhập không được bỏ trống!');
		return false;
	}
	if(mk == '')
	{
		alert('Mật khẩu không được bỏ trống!');ư
		return false;
	}
	return true;
} 