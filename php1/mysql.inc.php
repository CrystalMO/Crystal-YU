<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/2/24
 * Time: 14:15
 */
/*链接*/
function connect(){
    $connect=mysql_connect(DB_HOST.":".DB_PORT,DB_USER,DB_PWD) or die('数据库链接失败,错误号'.mysql_errno().';错误信息'.mysql_error());
    mysql_set_charset(DB_CHARSET);
    mysql_select_db(DB_NAME) or die('数据库链接失败,错误号'.mysql_errno().';错误信息'.mysql_error());
    return $connect;
}
/*查询一条数据 登陆  用户名  密码*/
function fetchOne($sql,$result_type=MYSQL_ASSOC){
    if($res=mysql_query($sql)){
        if(mysql_num_rows($res)>0){
            $row=mysql_fetch_array($res,$result_type);
            return $row;
        }else{
            return false;
        }
    }else{
        return false;
    }
}

/*查询多条数据*/
function fetchAll($sql,$result_type=MYSQL_ASSOC){
    if($res=mysql_query($sql)){
        if(mysql_num_rows($res)>0){
            while($row=mysql_fetch_array($res,$result_type)){
                $arr[]=$row;
            }
            return $arr;
        }else{
            return false;
        }
    }else{
        return false;
    }
}
/*更新方法*/
//update 表名 set 字段=‘值’，字段=‘值’ where 条件
//array('goodName'=>'iphone 7','price'=>'6600');
function update($table,$arr,$where=null){
    $str='';
    foreach($arr as $k=>$v){
        $str.=$k.'="'.$v.'",';
    }
    $str=substr($str,0,-1);
    $w=$where==null?null:" where {$where}";
    $update="update {$table} set {$str} {$w}";
    if(mysql_query($update)){
        if(mysql_affected_rows()>0){
            return  mysql_affected_rows();
        }else{
            return false;
        }
    }else{
        return false;
    }
}
/*增加方法*/
//insert into 表名（字段1，字段2....） values（‘值1’，‘值1’.....）
//array('goodName'=>'iphone 7','price'=>'6600');
function insert($table,$arr){
    $keys=join(',',array_keys($arr));
    $values='"'.join('","',array_values($arr)).'"';
    $sql="insert into {$table} ({$keys}) values({$values})";

    if(mysql_query($sql)){
        return mysql_insert_id();
    }else{
        return false;
    }
}
/*删除方法*/
//delete from 表名 where ......
function delete($table,$where=null){
    $w=$where==null?null:"where {$where}";
    $sql="delete from {$table} {$w}";
    if(mysql_query($sql)){
        if(mysql_affected_rows()>0){
            return mysql_affected_rows();
        }
    }else{
        return false;
    }
}





















