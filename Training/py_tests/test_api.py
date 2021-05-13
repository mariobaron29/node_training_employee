'''
import pytest

def test_file1_method1():
    x=5
    y=6
    assert x+1 == y, "test 1 failed"
    assert x == y-1, "test 2 failed"
def test_file1_method2():
    x=5
    y=6
    assert x+1 == y, "test 3 failed"
'''
import pytest
import requests
import json

@pytest.mark.parametrize("userid, name",[(1,"Luke"),(2,"David")])
def test_employee_by_id(supply_url, userid, name):
    resp = requests.get(supply_url + str(userid))##"3") 
    j = json.loads(resp.text)
    assert resp.status_code == 200
    assert j["id"] == userid #3
    assert j["name"] == name #"Mario Patch Mod"

def test_nf_employee_by_id(supply_url,userid):
    resp = requests.get(supply_url + str(userid)) 
    j = json.loads(resp.text)
    assert resp.status_code == 500

def test_create_employee(supply_url):
    data = {'name': 'test_create_employee', 'salary':24, 'position':'auto_generated'}

    resp = requests.post(supply_url, data=json.dumps(data), headers={'Content-Type': 'application/json'}) 
    j = json.loads(resp.text)
    assert resp.status_code == 200
    assert j['id'] > 0
    assert j["name"] == "test_create_employee"

def test_delete_employee(supply_url):
    resp = requests.delete(supply_url + "7") 
    j = json.loads(resp.text)
    assert resp.status_code == 200