<?php 

namespace app\Controller;

use app\core\Home_Controller;
/**
 * 默认控制器
 */
class IndexController extends Home_Controller
{
	public function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
		view('home/index', ['c' => get('c')]);
	}


    public function index1()
    {
        view('home/index1', ['c' => get('c')]);
    }

    public function searchStock()
    {
        $postData = post();
        $result = $this->curl('http://www.zx017.net/api/QueryStock', $postData);
        echo $result;
        exit;

    }

    public function GetMarketCount()
    {
        $result = file_get_contents('http://www.zx017.net/api/GetMarketCount');
        echo $result;exit;
    }

    public function GetDefaultStock()
    {
        $result = file_get_contents('http://www.zx017.net/api/GetDefaultStock');
        echo $result;exit;
    }

    public function GetStockJiangu()
    {
        $result = file_get_contents('http://www.zx017.net/api/GetStockJiangu');
        echo $result;exit;
    }
    
    /**
     * 验证申请参数
     * @param  array $data 申请参数
     */
    private function _ckeckData($data)
    {
        if(empty($data['mobile'])) {
            ajaxReturn(400, '请填写手机号码');
        }else {
            if($this->checkPhoneNumber($data['mobile']) == false) {
                ajaxReturn(400, '请填写正确的手机号码');
            }
        }

        // 根据 手机号判断申请是否存在
        $count = parent::$model->count('contect', ['phone' => $data['mobile']]);
        if (!empty($count)) {
            ajaxReturn(400, '请勿重复提交！');
        }
    }

    /**
     * 提交申请
     */
    public function submitContect()
    {
        $postData = post();

        // dump($postData);exit;
        if (!empty($postData)) {
            $this->_ckeckData($postData);
            unset($postData['is_submit']);
            $contectData = [
                'phone'         => $postData['mobile'],
                'ip'            => getIp(),
                'time'          => time(),
                'stock_code'    => $postData['Reserve1'],
                'c'             => $postData['c'],
                'form_position' => isset($postData['form_position']) ? $postData['form_position'] : 0
            ];
            // dump($contectData);exit;
            parent::$model->insert('contect', $contectData);
            if(parent::$model->id()) {
                ajaxReturn(200, '提交成功，稍后我们会以短信通知您');
            }else {
                ajaxReturn(202, '申请失败');
            }
        }
    }

    public function get_city()
    {
        $province_id = intval(post('province_id'));

        if ($province_id) {
            $city_list = parent::$model->select('city', ['id', 'city_name'], ['province_id' => $province_id]);
            ajaxReturn(200, $city_list);
        }

        ajaxReturn(400);
    }

}